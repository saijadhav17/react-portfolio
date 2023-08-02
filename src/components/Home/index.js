import LogoTitle from '../../assets/images/Alogo2.png' ;
import {useEffect, useState} from 'react' ;
import {Link} from'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import GIF from '../../assets/images/output-onlinegiftools.gif'
// import Logo from './Logo'
import './index.scss';
// import './../../App.scss'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate') 
    const nameArray = ['.','M','.',' ', 'J','.']
    const jobArray = ['A',' ','W','E','B',' ' ,'D','E','V','E','L','O','P','E','R','.']
    useEffect(() => {
       setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    // useEffect(() => {
        
    //     let timeoutId = setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
        
    //     return () => {
    //                 clearTimeout(timeoutId)
    //             }
    // }, [])
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1><AnimatedLetters letterClass={letterClass}
                strArray={['H','E','Y',' ','!',' ']}
                idx = {15} /><br/> <AnimatedLetters letterClass={letterClass}
                strArray={['I',"'",'M', ' ']}
                idx = {15} /> 
                
                <img src = {LogoTitle} alt='developer' />

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx = {15} />
                <br/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx = {15} /></h1>
                <h2> Computer Science Undergraduate at PICT Pune. I revel in crafting elegant Algorithms that breathe Life into Innovative concepts and tackle Practical Challenges with Ingenuity and Proficiency.</h2>
                <Link to = "/contact" className = 'flat-button'>CONTACT ME</Link>
            </div>
            <div className='gif-container'>
        <img src={GIF} alt='GIF' />
      </div>
        </div>
    )
}

export default Home