import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

async function main() {

  const hashedPassword = await bcrypt.hash('123456', 10);

  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
    },
  });

  await prisma.article.createMany({
    data:[
        {
          title: 'Elon Wears Two Hats During Trump Meeting in Desperate Bid for Attention',
          description: 'Meanwhile, Trump acknowledged that Christmas this year may not be so merry.',
          image: 'https://gizmodo.com/app/uploads/2025/04/elon-musk-two-hats-double-april-30-2025.jpg',
          content: 'Voici le contenu détaillé du premier article.',
          createdAt: '2025-04-30T20:20:53Z',
        },
        {
          title: 'Sheryl Crow Says an Armed Man Got On Her Property After She Ditched Her Tesla',
          description: 'Sheryl Crow said an armed intruder got onto her property after she publicly sold her Tesla in protest of Elon Musk and Donald Trump.',
          image: 'https://www.rollingstone.com/wp-content/uploads/2025/04/GettyImages-2198304896.jpg?w=1600&h=900&crop=1',
          content: 'Sheryl Crow said she caught an armed man on her property in Tennessee after publicly ditching her Tesla in protest of Elon Musk and President Donald Trump’s efforts to gut governmentprograms through … [+1767 chars',
          createdAt: '2025-04-30T20:26:25Z',
        },
        {
          title: 'Woman sexually assaulted after being forced into car in Abbotsford, police say',
          description: 'Police in Abbotsford, B.C., are looking for a man who allegedly forced a woman into his car and sexually assaulted her early Tuesday morning.',
          image: 'https://i.cbc.ca/1.7523309.1746053831!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/abbotsford-pd-sex-assault-suspect.jpg?im=Resize%3D620',
          content: 'Police in Abbotsford, B.C., are looking for a man who allegedly forced a woman into his car and sexually assaulted her early Tuesday morning.\r\nAccording to the Abbotsford Police Department, the woman… [+1035 chars]',
          createdAt: '2025-04-30T23:14:52Z',
        },
        {
          title: `Trump's New Tariff Rule Is Wildly Convenient for Tesla`,
          description: `The Trump administration has carefully altered its existing auto tariff policy in an apparent attempt to spare Elon Musk's Tesla. This week, US commerce secretary Howard Lutnick announced a new rule, stating that any car that's composed of 85 percent United S…`,
          image: 'https://wordpress-assets.futurism.com/2025/04/trump-tariff-rule-convenient-tesla.jpg',
          content: `The Trump administration has carefully altered its existing auto tariff policy in a way that seems very specifically designed to spare Tesla, the automaker run by Trump's close ally Elon Musk.\r\nThis … [+3002 chars]`,
          createdAt: '2025-04-30T14:34:55Z',
        },
        {
          title: 'Consumer spending soared in March as Americans tried to get ahead of tariffs - CNN',
          description: 'A car-buying frenzy, stoked by tariff fears, drove US consumer spending in March to its biggest monthly gain in more than two years, new data showed Wednesday.',
          image: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2207834345.jpg?c=16x9&q=w_800,c_fill',
          content: 'A car-buying frenzy, stoked by tariff fears, drove US consumer spending in March to its biggest monthly gain in more than two years, new data showed Wednesday.\r\nConsumer spending leapt 0.7% from Febr… [+4833 chars]',
          createdAt: '2025-04-30T16:47:00Z',
        },
        {
          title: `Ford CEO says Trump's tariff reprieve is helpful, but more changes needed - CNBC`,
          description: `Ford CEO Jim Farley said it's \"essential\" for U.S. policies to encourage exports as well as reward companies, such as Ford, for their American production`,
          image: 'https://image.cnbcfm.com/api/v1/image/108138823-1746032320441-IMG_8492.JPG?v=1746032554&w=1920&h=1080',
          content: `LOUISVILLE, Ky. President Donald Trump's reprieve for automotive parts tariffs is helpful, but more changes are still needed to assist automakers and grow the U.S. auto industry, Ford Motor CEO Jim F… [+2594 chars]`,
          createdAt: '2025-04-30T16:36:02Z',
        }
      ] ,
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
