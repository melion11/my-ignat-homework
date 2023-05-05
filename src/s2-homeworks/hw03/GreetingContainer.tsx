import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import {pureAddUserCallback, UserType} from './HW3'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import any = jasmine.any;

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void
        // need to fix any

    // need to fix any
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name != '') {
        addUserCallback(setName(name))
        setName('')
    } else {
        setError(error(any()))
    }
}

export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
    if (name != '') {
        return;
    }
    setError('Error')

}

export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
   if (e.charCode === 13) {
       addUser();
   }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('Error')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = 0 // need to fix
    const lastUserName = 'some name' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
