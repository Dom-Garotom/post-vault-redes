import { PopoverStyled } from './popoverStyled'
import ConfigImage from "../../../assets/sliders-solid.svg"

export default function PopoverPost() {
  return (
    <PopoverStyled.Popover>
        <img src={ConfigImage} width={20} height={20} />
    </PopoverStyled.Popover>
  )
}
