import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

interface Props {
  title: string;
  isOpen: boolean;
  onAccordionClick: () => void;
  children: React.ReactNode;
}

const Accordion = ({ title, children, isOpen, onAccordionClick }: Props) => {
  const accordionContentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setContentHeight(accordionContentRef.current.scrollHeight)
    } else {
      setContentHeight(0)
    }
  }, [isOpen])

  return (
    <div>
      <button
        onClick={onAccordionClick}
        className="flex items-center justify-center w-full px-4 py-3"
      >
        <span className="text-lila-wyer font-semibold lg:text-xl">{title}</span>
        {isOpen ? (
          <AiOutlineUp className="text-lila-wyer h-4 w-4" />
        ) : (
          <AiOutlineDown className="text-lila-wyer h-4 w-4" />
        )}
      </button>
      <div
        className="text-xl md:text-base overflow-hidden flex flex-col gap-4"
        style={{ maxHeight: `${contentHeight}px` }}
        ref={accordionContentRef}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion
