import { Client } from "../Model/Clients.js";

export const adduser = async (req, res) => {
     
            try {
                  
                  const client = new Client({
                        name:req.body.name,
                        lastname:req.body.lastname,
                        project:req.body.project,
                        mobile:req.body.mobile,
                        email:req.body.email,
                  });
                  await client.save();
                  res.status(200).json(client);
                } catch (err) {
                  res.status(400).json({ error: err.message });
                }
       
    };

    export const alluser=async(req,res)=>{
      try{
         const allclient=await Client.find();
         res.status(200).json(allclient);
      }
      catch(err){
            res.status(400).json({ error: err.message });
      }
    }


    export const deleteUser = async (req, res) => {
      const userId = req.body.id;
    
      try {
        const deletedUser = await Client.findByIdAndRemove(userId);
    
        if (!deletedUser) {
          return res.status(404).json({ error: "User not found" });
        }
    
        res.status(200).json({ message: "User deleted successfully" });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    };

    export const updateClient = async (req, res) => {
      try {
        const clientId = req.params.id; // Extract the client ID from the URL
        const updateData = req.body; // New data for the client
    
        // Find the client by ID and update their details
        const updatedClient = await Client.findByIdAndUpdate(clientId, updateData, {
          new: true,
        });
    
        if (!updatedClient) {
          return res.status(404).json({ error: "Client not found" });
        }
    
        res.status(200).json(updatedClient);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    };
    
    