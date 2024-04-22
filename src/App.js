export default function App() {
  
  return (
    <div className="card">
       <Avatar/>
       <div className="data">
        <Intro/>
        <SkillList/>
       </div>
    </div>
  );
}

function Avatar(){
  return <img className="avatar" src="laptop.jpg" alt="Laptop"/>
}
function Intro(){
  return(
    <div>
      <h1>Noorinisha Begam</h1>
      <p>
        Full-stack web developer.I like to play board games, to cook (and eat), or to
        just enjoy the sun at the beach.
      </p>
    </div>
  )
}
const skilllist = [
  {
    skill:'react',
    level:'intermediate',
    color: 'blue'
},
{
  skill:'html + css',
  level:'advanced',
  color: 'orange'
},
{
skill:'JavaScript',
level:'advanced',
color: 'yellow'
},
{
skill:'svelte',
level:'beginner',
color: 'orangered'
}
]
function SkillList(){
  return(
    <div className='skill-list'>
      {/* <Skill skill='React' emoji="💪" color='blue'/>
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" /> */}
        { skilllist.map(lang=>
          <Skill skills={lang} key={lang.skill}/>
          )}
    </div>
  )
}
function Skill(props){
  return(
    <div className='skill' style={{backgroundColor:props.skills.color}}> 
    {/* <span>{props.skill}</span>
   <span>{props.emoji}</span> */}
 
         <span>{props.skills.skill}</span>
      <span>{props.skills.level==='advanced'?'💪': props.skills.level ==='intermediate' ? '🧩' : '🔰' }</span>
      </div>
      )

}