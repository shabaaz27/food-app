import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            hasError:false
        }
    }
    static getDerivedStateFromError(error) {  
        // It will update the state so the next render shows the fallback UI.  
             this.setState({ hasError: true }) 
      }  
      componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
        console.log(error,errorInfo)
    
    }
    render(){
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1 style={{color:"red",fontSize:"24px",textAlign:"center"}}> went wrong.</h1>;
          }
      
          return this.props.children; 
        }
    }

export default ErrorBoundary