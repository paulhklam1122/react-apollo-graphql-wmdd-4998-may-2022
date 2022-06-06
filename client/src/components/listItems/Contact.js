import { useState } from 'react'
import { Card } from 'antd'
import RemoveContact from '../buttons/RemoveContact'

import { EditOutlined } from '@ant-design/icons'
import UpdateContact from '../forms/UpdateContact'

const getStyles = () => ({
  card: {
    width: '500px'
  }
})

const Contact = props => {
  const styles = getStyles()
  const [id] = useState(props.id)
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [editMode, setEditMode] = useState(false)

  const handleButtonClick = () => {
    setEditMode(!editMode)
  }

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      default:
        break
    }
  }

  return (
    <div>
      {editMode ? (
        <UpdateContact
          id={props.id}
          firstName={props.firstName}
          lastName={props.lastName}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : (
        <Card
          actions={[
            <EditOutlined key='edit' onClick={handleButtonClick} />,
            <RemoveContact id={id} />
          ]}
          style={styles.card}
        >
          {firstName} {lastName}
        </Card>
      )}
    </div>
  )
}

export default Contact
