import { useState } from 'react';
import TsPropTest1 from '../tsPropTest/TsPropTest1';

const HookTest1 = () => {

    const [showInfo, setShowInfo] = useState<boolean>(false);

    const toggleInfo = () => {
        setShowInfo((prev) => (!prev));
    }

    return (
        <div>
            <h2>HookTest 1</h2>

            <div>
                {showInfo && (
                    <TsPropTest1
                        name={["Collin", "Terry"]}
                        age={23}
                        gender={"Male"}
                        profession={"Programmer"}
                        hobbies={["Sudoku, ", "Calisthenics "]}
                        isMarried={true}
                    />
                )}

                <br />
                <button
                    onClick={toggleInfo}
                >
                    {!showInfo ? "Show" : "Hide"}
                </button>
            </div>

        </div>
    )
}

export default HookTest1
