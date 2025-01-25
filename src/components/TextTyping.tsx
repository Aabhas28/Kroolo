import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'The Only AI WorkOS built for Engineering',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'The Only AI WorkOS built for Marketing',
        1000,
        'The Only AI WorkOS built for Product',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default ExampleComponent;