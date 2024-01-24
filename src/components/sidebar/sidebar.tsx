import { Dialog, Transition } from '@headlessui/react';
import { X } from 'phosphor-react';
import { Fragment } from 'react';

import { Typewriter } from 'react-simple-typewriter'

interface SidebarProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export default function Sidebar({ isOpen, setOpen }: SidebarProps) {

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0"
        open={isOpen}
        onClose={setOpen}
      >
        <div className="absolute inset-0 ">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-black/30 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-[23rem] bg-red-500">
                oi
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
