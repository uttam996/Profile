import { Box } from '@chakra-ui/layout'
import { Card, Image, Stack, Heading, Text, Button, CardBody, CardFooter, useColorModeValue } from '@chakra-ui/react'



export default function Projects() {
  return (
    < Box 
     id='projects'
     mb={10}
    >
       <Text fontSize='xxx-large' fontWeight='bold'
        color={'white'}
       textAlign='center'>
          Projects
        </Text>
    
    <Box
    
      style={{
        width: '80%',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        // gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem',

        // bgGradient: 'linear(to-b, #7928CA, #FF0080)',
        // width: '100vw',
      }}>
     
        
        {
            [1, 2, 3, 4, 5, 6, ].map((item) => {
                return <Project key={item} />
            })
        }
      
    </Box>
    </Box>
  )
}


const Project = () => {
    return (
        <Card
    p='4'
    bg={useColorModeValue('gray.100', 'gray.700')}
        
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
    )
}    