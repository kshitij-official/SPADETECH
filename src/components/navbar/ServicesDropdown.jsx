import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { NavLink } from 'react-router-dom';
import { TbChevronDown } from 'react-icons/tb'

export const ServicesDropdown = () => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className='services_trigger'>
          <span>Services</span>
          <TbChevronDown />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className='services_dropdown'>
            <DropdownMenu.Item>
              <NavLink to={"/services/consultancy"}>CONSULTANCY</NavLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <NavLink to={"/services/development"}>DEVELOPMENT</NavLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <NavLink to={"/services/security-audit"}>SECURITY</NavLink>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}

export default ServicesDropdown
