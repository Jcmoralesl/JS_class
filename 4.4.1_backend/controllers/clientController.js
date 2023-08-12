const getClients = (req, res) =>  res.status(200).send({
    message:"Client"
});

const getClient = (req, res) =>  res.status(200).send({
    message:"Client"
});

const insertClients = (req, res) =>  res.status(200).send({
    message:"Client"
});

module.exports = {
    getClients,
    getClient,
    insertClients,
};


