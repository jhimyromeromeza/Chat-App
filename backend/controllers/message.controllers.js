import Conversations from "../models/conversations.models.js";
import Message from "../models/message.models.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const {id: receiverId} = req.params;
    const senderId= req.user.id;

    let conversation = await Conversations.findOne({
      participants: { $all: [senderId, receiverId]}
    });

    if(!conversation) {
      conversation = await Conversations.create({
        participants: [senderId, receiverId]
      })
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message
    })

    conversation.messages.push(newMessage._id);

    await Promise.all([conversation.save(), newMessage.save()])
    
    res.status(201).json({conversation})


  } catch (error) {
    console.log("error in sendMessage: ", error.message);
    res.status(500).json("error server internar");
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversations.findOne({
    participants: {$all: [senderId, userToChatId]}
    }).populate('messages');

    //if(!conversation) return res.status(200).json([]);

    const messages = conversation.messages

    res.status(201).json(messages);

  }catch (error) {
    console.log('erron in getMessages: ', error.message);
    res.status(500).json({error: 'error internal'})
  }
}