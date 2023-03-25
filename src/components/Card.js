import {Box, Heading, HStack, Image, Text, VStack} from '@chakra-ui/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({title, description, imageSrc, url}) => {
	// Implement the UI for the Card component according to the instructions.
	// You should be able to implement the component with the elements imported above.
	// Feel free to import other UI components from Chakra UI if you wish to.
	return (
		<HStack>
			<Box bg='white' color='black' borderRadius='5px'>
				<VStack>
					<Image src={imageSrc} borderRadius='5px' />
					<VStack p='10px' align='left'>
						<Heading fontSize='md'>{title}</Heading>
						<Text fontSize='xs'>{description}</Text>
						<HStack>
							<Text fontSize='xs' fontWeight='bold'>
								<a href={url} target='_blank' rel='noreferrer'>
									See more...
									<FontAwesomeIcon icon={faArrowRight} size='1x' />
								</a>
							</Text>
						</HStack>
					</VStack>
				</VStack>
			</Box>
		</HStack>
	);
};

export default Card;
