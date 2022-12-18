import { Tui, Canvas } from "./deps.ts"
import { ButtonComponent, TextboxComponent } from "./deps.ts"
import { handleKeypresses, handleMouseControls, handleKeyboardControls } from "./deps.ts"
import { crayon } from "./deps.ts"

const baseTheme = {
    base: crayon.bgLightBlue,
    focused: crayon.bgCyan,
    active: crayon.bgBlue
}

const tuiStyle = crayon.bgBlack.white

const tui = new Tui({
    style: tuiStyle,
    canvas: new Canvas({
        refreshRate: 1000 / 60,
        stdout: Deno.stdout
    })
})

tui.dispatch()

handleKeyboardControls(tui)
handleMouseControls(tui)
handleKeypresses(tui)

tui.run()
