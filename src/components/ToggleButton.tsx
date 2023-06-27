import { useState } from 'react'
import ToggleOffIcon from '@mui/icons-material/ToggleOff'
import ToggleOnIcon from '@mui/icons-material/ToggleOn'

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false)

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  if (isToggled) {
    return (
      <div>
        <ToggleOnIcon onClick={handleToggle} />
      </div>
    )
  } else {
    return <div>
      <ToggleOffIcon onClick={handleToggle} />
    </div>
  }
}

export default ToggleButton
