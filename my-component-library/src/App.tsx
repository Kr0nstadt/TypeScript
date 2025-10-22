import React, { useState } from 'react';
import { Button, Input } from './components';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleButtonClick = (variant: string) => {
    setMessages(prev => [...prev, `${variant} button clicked!`]);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setMessages(prev => [...prev, `Submitted: ${inputValue}`]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Component Library Demo</h1>
        
        <div className="demo-section">
          <h2>Button Components</h2>
          <div className="button-group">
            <Button 
              variant="primary" 
              size="md" 
              onClick={() => handleButtonClick('Primary')}
            >
              Primary Button
            </Button>
            
            <Button 
              variant="secondary" 
              size="md" 
              onClick={() => handleButtonClick('Secondary')}
            >
              Secondary Button
            </Button>
            
            <Button 
              variant="danger" 
              size="md" 
              onClick={() => handleButtonClick('Danger')}
            >
              Danger Button
            </Button>
            
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => handleButtonClick('Small')}
            >
              Small Button
            </Button>
            
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => handleButtonClick('Large')}
            >
              Large Button
            </Button>
            
            <Button 
              variant="primary" 
              size="md" 
              disabled 
              onClick={() => handleButtonClick('Disabled')}
            >
              Disabled Button
            </Button>
          </div>
        </div>

        <div className="demo-section">
          <h2>Input Components</h2>
          <div className="input-group">
            <Input
              label="Basic Input"
              placeholder="Enter text here"
              value={inputValue}
              onChange={handleInputChange}
            />
            
            <Input
              label="Email Input"
              type="email"
              placeholder="Enter your email"
              value={inputValue}
              onChange={handleInputChange}
              helperText="We'll never share your email"
            />
            
            <Input
              label="Required Field"
              required
              placeholder="This field is required"
              value={inputValue}
              onChange={handleInputChange}
            />
            
            <Input
              label="Password with Error"
              type="password"
              value={inputValue}
              onChange={handleInputChange}
              error="Password must be at least 8 characters"
            />
          </div>
          
          <Button 
            variant="primary" 
            size="md" 
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </Button>
        </div>

        <div className="demo-section">
          <h2>Event Log</h2>
          <div className="event-log">
            {messages.length === 0 ? (
              <p>No events yet. Click buttons or type in inputs!</p>
            ) : (
              messages.map((message, index) => (
                <p key={index}>{message}</p>
              ))
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;