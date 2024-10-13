const Aeronave = require("../models/Aeronave");

const aeronaveResolver = {
    Query: {
        aeronaves() {
            return Aeronave.find();
        },
        aeronave(_, { id }) {
            return Aeronave.findById(id);
        },
    },
    Mutation: {
        createAeronave(_, { aeronave }) {
            const newAeronave = new Aeronave(aeronave);
            return newAeronave.save();
        },
        updateAeronave(_, { id, aeronave }) {
            return Aeronave.findByIdAndUpdate(id, aeronave, {
                new: true,
                useFindAndModify: false,
            });
        },
        deleteAeronave(_, { id }) {
            return Aeronave.findByIdAndRemove(id, { useFindAndModify: false });
        },
    },
};

module.exports = aeronaveResolver;
