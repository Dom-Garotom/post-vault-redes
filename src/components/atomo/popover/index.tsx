import React from 'react'

import { PopoverStyled } from './popoverStyled'
import { IconAdjustmentsAlt } from '@tabler/icons-react';

export default function PopoverPost() {
  return (
    <PopoverStyled.Popover>
        <IconAdjustmentsAlt stroke={2} size={19}/>
    </PopoverStyled.Popover>
  )
}
