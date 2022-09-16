import {uid} from 'uid';

import Select, { prepareOptions } from './Select';

const mockedData = [
  {
    id: uid(),
    value: "Susan",
    label: "Susan",
    children: [
      {
        id: uid(),
        value: "Susan inner",
        label: "Susan inner",
        children: [
          {
            id: uid(),
            value: "Susan more deeper 1",
            label: "Susan more deeper 1",
          }, 
          {
            id: uid(),
            value: "Susan more deeper 2",
            label: "Susan more deeper 2",
          }
        ]
      }
    ]
  },
  {
    id: uid(),
    value: "Rahul",
    label: "Rahul",
  },
  {
    id: uid(),
    value: "Kamla",
    label: "Kamla",
  },
];

function App() {
  const preparedData = prepareOptions(mockedData);
  console.log(preparedData);

  return (
    <Select options={preparedData} />
  );
}

export default App;
