import { useState } from 'react'

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false)

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  return (
    <button
      className={`flex items-center justify-start w-12 h-6 rounded-full ${
        isToggled ? 'bg-green-500' : 'bg-gray-300'
      }`}
      onClick={handleToggle}
    >
      <span
        className={`inline-block w-4 h-4 rounded-full ${
          isToggled ? 'transform translate-x-6' : ''
        } bg-white shadow`}
      />
    </button>
  )
}

export default ToggleButton
