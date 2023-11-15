import Container from '../../components/Container'
import SkillsTicker from '../../components/SkillsTicker';
import {css,js,bootstrap,dbeaver,expressjs,html,nextjs,nodejs,postgre,postman,reactjs,redux,tailwind,typescript } from '../../assets/images/index'

const skills = [
  {
    logo: `${css}`, 
    name: 'CSS' 
  },
  {
    logo: `${js}`,
    name: 'Javascript'
  },
  {
    logo: `${html}`,
    name: 'HTML'
  },
  {
    logo: `${reactjs}`,
    name: 'ReactJS'
  },
  {
    logo: `${nextjs}`,
    name: 'Nextjs'
  },
  {
    logo: `${nodejs}`,
    name: 'Nodejs'
  },
  {
    logo: `${expressjs}`,
    name: 'ExpressJS'
  },
  
];

const skillsTwo=[{
  logo: `${bootstrap}`,
  name: 'Bootstrap'
},
{
  logo: `${dbeaver}`,
  name: 'Dbeaver'
},
{
  logo: `${postman}`,
  name: 'Postman'
},
{
  logo: `${postgre}`,
  name: 'Postgre'
},
{
  logo: `${redux}`,
  name: 'Redux'
},
{
  logo: `${tailwind}`,
  name: 'Tailwind'
},
{
  logo: `${typescript}`,
  name: 'Typescript'
}]

const CodingSkills = () => {
  return (
    <Container className='py-56 text-center' >
      <h2 className='font-SpaceMono text-2xl mb-10'>
       Coding Skills
      </h2>
      <SkillsTicker skills={skills}/>
      {/* <SkillsTicker skills={skillsTwo}/> */}
    </Container>
  )
}

export default CodingSkills