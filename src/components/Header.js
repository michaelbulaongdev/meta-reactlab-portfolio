import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHouseUser} from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faLinkedin,
	faMedium,
	faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import {Box, HStack, Slide} from '@chakra-ui/react';
import {Link} from 'react-scroll';

const socials = [
	{
		icon: faEnvelope,
		url: 'mailto: michaelbulaongdev@gmail.com',
	},
	{
		icon: faGithub,
		url: 'https://github.com/michaelbulaongdev/',
	},
	{
		icon: faLinkedin,
		url: 'https://www.linkedin.com/in/michaelbulaong/',
	},
	{
		icon: faMedium,
		url: 'https://medium.com/@michaelbulaongdev',
	},
	{
		icon: faStackOverflow,
		url: 'https://stackoverflow.com/users/21485238/michaelbulaongdev',
	},
];

export default function Header() {
	//disabled the handleClick and replaced with react-scroll
	// const handleClick = (anchor) => () => {
	//   const id = `${anchor}-section`;
	//   const element = document.getElementById(id);
	//   if (element) {
	//     element.scrollIntoView({
	//       behavior: "smooth",
	//       block: "start",
	//     });
	//   }
	// };
	const [show, setShow] = useState(true);
	const [prevScrollY, setPrevScrollY] = useState(0);

	const handleScroll = () => {
		window.scrollY > prevScrollY ? setShow(false) : setShow(true);
		setPrevScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollY]);

	const offsetValue = -20;

	return (
		<Slide direction='top' in={show} unmountOnExit={true} style={{zIndex: 10}}>
			<Box
				position='fixed'
				top={0}
				left={0}
				right={0}
				// translateY={0}
				transitionProperty='transform'
				transitionDuration='.3s'
				transitionTimingFunction='ease-in-out'
				backgroundColor='#18181b'
				zIndex={3}>
				<Box color='white' maxWidth='1280px' margin='0 auto'>
					<HStack
						px={16}
						py={4}
						justifyContent='space-between'
						alignItems='center'>
						<nav>
							<HStack spacing='20px'>
								{socials.map((item) => {
									return (
										<a
											key={item.url}
											href={item.url}
											target='_blank'
											rel='noreferrer'>
											<FontAwesomeIcon icon={item.icon} size='2x' />
										</a>
									);
								})}
							</HStack>
						</nav>
						<nav>
							<HStack spacing={8}>
								<Link
									activeClass='active'
									className='nav-scroll'
									to='landing-section'
									offset={offsetValue}
									smooth={true}
									duration={500}>
									<FontAwesomeIcon icon={faHouseUser} size='1x' />
								</Link>
								<Link
									activeClass='active'
									className='nav-scroll'
									to='projects-section'
									ignoreCancelEvents={true}
									offset={offsetValue}
									smooth={true}
									duration={500}>
									Projects
								</Link>
								<Link
									activeClass='active'
									className='nav-scroll'
									to='contactme-section'
									offset={offsetValue}
									smooth={true}
									duration={500}>
									Contact Me
								</Link>
							</HStack>
						</nav>
					</HStack>
				</Box>
			</Box>
			//{' '}
		</Slide>
	);
}
