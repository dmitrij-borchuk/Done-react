import React from 'react'
import { ToggleLayer, anchor } from 'react-laag'

interface IProps {
  content: React.ReactNode
}
export const DropMenu: React.FC<
  IProps & React.BaseHTMLAttributes<HTMLDivElement>
> = ({ children, content, ...others }) => {
  return (
    <ToggleLayer
      // provide placement config
      placement={{
        anchor: anchor.BOTTOM_CENTER,
        autoAdjust: true,
        triggerOffset: 10,
      }}
      closeOnOutsideClick
      closeOnDisappear="partial"
      // render-prop to render our layer
      renderLayer={({ layerProps, isOpen }) =>
        // only render on `isOpen`
        isOpen && (
          <div
            // for calculation stuff
            ref={layerProps.ref}
            className="rounded border p-2 bg-white"
            style={{
              // inject calculated positional styles
              ...layerProps.style,

              // add your own styles
            }}
            {...others}
          >
            {content}
          </div>
        )
      }
    >
      {({ toggle, triggerRef }) => (
        <span
          // only the `triggerRef` is required...
          ref={triggerRef}
          // ...the rest is up to you
          onClick={toggle}
        >
          {children}
        </span>
      )}
    </ToggleLayer>
  )
}
