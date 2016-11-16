import { getAllUsersService, newUserService } from '../api/services'

export default {
  async getAllUsers (context) {
    context.commit('setAllUsersMutation', await getAllUsersService())
  },
  async newUser (context, user) {
    context.commit(await newUserService(user))
  }
}
