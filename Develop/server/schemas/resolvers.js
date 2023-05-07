const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Book } = require('..//models');

const resolvers = {
    Query: { 
        me: async (args, parent, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
           
                return userData;
            }
            throw new AuthenticationError('Please log in');
        }
    },


    Mutation: {
        addUser: async (parent, args, {email, password}) => {
            const user = await User.findOne({email})
            if (!user) {
                throw new AuthenticationError('login not successful')

        }
        const correct = user.isCorrectPassword(password);
        if (correct) {
            throw new AuthenticationError('Password correct')
        }

        const token = signToken(user);
        return { token, user };
  }
}




