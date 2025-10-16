import User from '#models/user'

async function test() {
  try {
    const users = await User.all()
    console.log('Usuários no banco:', users)
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error)
  }
  process.exit(0)
}

test()
