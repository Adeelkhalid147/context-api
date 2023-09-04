"use client"

import {createContext} from "react"

interface Count {
    [x:string]:any
}


{/* component A => component B (child) => component C (child) 
    context api kuch as trha se work krti h k A se data B mai jae ga or B se C mai
    A ka child B h as liye data A se B mai jae ga na k sedha A se C mai.
    asi trha se hm ak page se dosre page mai data le ja skte hai. context api State
    manage k liye use hta h
    */}

    /* 
    createcontext ka function react deta h or as function k parametr mai koi value pas
    krni hti h like string number object boolean etc. or age multi context bnane hn
    to hr context ko ak alg variable mai dal k jitne mrzi context bna skte hai.
    as ka ak provider bnan h ta k jis page ko hm rape kren gy us mai ye createcontext
    ko get kr skte hai.

    */

export const CountContext = createContext({} as Count)





