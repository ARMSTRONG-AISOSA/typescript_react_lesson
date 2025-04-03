import React, { useState } from 'react';

const HookTest2 = () => {

    const [inputText, setInputText] = useState<string | null>(null);

    // React.ChangeEvent<HTMLInputElement>:  This ensures type safety (so e.target.value is always treated as whatever data type the input accepts in this case, it is a string).
    const updateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event);
        alert("Form submitted with text: " + inputText);
    }

    return (
        <div>
            <h2>HookTest 2</h2>

            <form
                onSubmit={formSubmit}
            >
                <p>Input Text: {!inputText ? "No text entered" : inputText}</p>
                <br />

                <input
                    placeholder='Enter some text...'
                    onChange={updateChange}
                />
                <br />

                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default HookTest2
