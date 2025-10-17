import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      nome_completo: 'Gerente Principal',
      email: 'gerente@gmail.com',
      senha: '160182',
      papel_id: 1,
    })

    await User.create({
      nome_completo: 'Ana Flávia',
      email: 'nana@gmail.com',
      senha: '20082007',
      papel_id: 2,
    })

    await User.create({
      nome_completo: 'Vinicius',
      email: 'vinicius@gmail.com',
      senha: '10032007',
      papel_id: 2,
    })
  }
}