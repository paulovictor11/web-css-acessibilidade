// import styled, { css } from "styled-components";
// import { styled } from "@stitches/react";
import * as Popover from "@radix-ui/react-popover";

// interface ButtonProps {
//     size: "large" | "small";
// }

// const Button = styled.button<ButtonProps>`
//     background-color: pink;
//     padding: 12px;
//     border-radius: 8px;
//     border: 1px solid purple;

//     ${(props) =>
//         props.size === "large" &&
//         css`
//             font-size: 64px;
//             padding: 48px;
//         `}
// `;

// const Button = styled("button", {
//     backgroundColor: "pink",
//     padding: "12px",
//     borderRadius: "8px",
//     border: "1px solid purple",

//     variants: {
//         size: {
//             large: {
//                 fontSize: 64,
//                 padding: 20,
//             },
//             small: {
//                 fontSize: 10,
//                 padding: 6,
//             },
//         },
//     },
// });

function App() {
    return (
        <Popover.Root>
            <div className="h-screen flex flex-col gap-8 justify-center items-center dark:bg-zinc-900">
                {/* <Button size="large">Hello World</Button>
                <Button>Hello World</Button>
                <Button size="small">Hello World</Button> */}

                <Popover.Content>
                    <p className="text-white">Olá mundo</p>
                </Popover.Content>

                <Popover.Trigger className="w-full mx-8 sm:w-auto text-4xl bg-violet-500 py-4 px-8 rounded-lg text-white hover:bg-violet-700 transition-colors">
                    Hello World
                </Popover.Trigger>
            </div>
        </Popover.Root>
    );
}

export default App;
