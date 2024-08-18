declare module 'react-typist' {
    import * as React from 'react';
  
    interface TypistProps {
      startDelay?: number;
      cursor?: boolean;
      loop?: boolean;
      children?: React.ReactNode;
    }
  
    class Typist extends React.Component<TypistProps> {}
  
    export default Typist;
  }
  