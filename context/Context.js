
import React, {createContext, useState} from 'react'


export const Context = createContext()

export const ModalProvider = (props) => {

	const [modal, setModal] = useState(false)


	return (
		<Context.Provider value={{modal, setModal}} >
			{props.children}
		</Context.Provider>
	)

}

