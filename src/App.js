import React from 'react';
import Select from 'react-select'





const App = () => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }, {
      value: 'milk', label: 'Milk'
    }, {
      value: 'orange', label: 'Orange'
    }, {
      value: 'apple', label: 'Apple'
    }, {
      value: 'lime', Label: 'Lime'
    }
  ]
  return (
    <Select options={options} />
  )
}

export default App