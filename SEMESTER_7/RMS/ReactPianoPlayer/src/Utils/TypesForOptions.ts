export interface Options{
    Color:string,
    KeyPressColor:string,
    RandomColors:boolean,
    IsEffects:boolean,
    backgroundImage: string,
    speed:number,
    playSpeed:number,
    watermark:boolean,
    soundOn:boolean,
    blockRadius:number,
    blockShadowRadius:number,
    ShadowColor:string,
    randomEffectColors:boolean,
    EffectsBlockColor:boolean,
    EffectsKeyColor:boolean,
    EffectsColor:string,
    OctaveLines:boolean,
    GameMode:boolean,
    renderMethod:'Interval' | 'animationFrame',
    Effect:'fountain' | 'dancingLines' | 'hexagon' | 'stickyBalls' | 'fireworks',
    ThinerBlockColor:string,
    GradientColor:string,
    GradientBlocks:boolean,
    GradientBlocksColor:Array<string>
}
