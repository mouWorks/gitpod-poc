
import { someString } from './utils' 
import { say } from './index'

test('I am saying something', ()=>{
    const said = say()
    expect(said).toBe(someString())
    // console.log(`said`, said)
    // expect(1).toBe(1)
})