
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
export const tone = {
    C: [16.35, 32.7, 65.41, 130.81, 261.63, 523.25, 1046.5, 2093.0, 4186.01],
    Db: [17.32, 34.65, 69.3, 138.59, 277.18, 554.37, 1108.73, 2217.46, 4434.92],
    D: [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66, 2349.32, 4698.64],
    Eb: [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51, 2489.02, 4978.03],
    E: [20.6, 41.2, 82.41, 164.81, 329.63, 659.26, 1318.51, 2637.02],
    F: [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91, 2793.83],
    Gb: [23.12, 46.25, 92.5, 185.0, 369.99, 739.99, 1479.98, 2959.96],
    G: [24.5, 49.0, 98.0, 196.0, 392.0, 783.99, 1567.98, 3135.96],
    Ab: [25.96, 51.91, 103.83, 207.65, 415.3, 830.61, 1661.22, 3322.44],
    A: [27.5, 55.0, 110.0, 220.0, 440.0, 880.0, 1760.0, 3520.0],
    Bb: [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66, 3729.31],
    B: [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53, 3951.07]

}
export const scales = {
    F: {
      notes: [
        ['3-3-pull'],
        ['1-6-pull'],
        ['2-6-pull'],
        ['1-7-pull'],
        ['2-7-pull'],
        ['3-6-pull'],
        ['1-9-pull'],
        ['3-7-pull'],
      ],
      thirds: [
        ['2-6-pull', '3-3-pull'],
        ['1-6-pull', '1-7-pull'],
        ['2-6-pull', '2-7-pull'],
        ['1-7-pull', '1-8-pull'],
        ['1-9-pull', '2-7-pull'],
        ['3-7-pull', '3-6-pull'],
        ['1-9-pull', '1-10-pull'],
        ['2-10-pull', '3-7-pull'],
      ],
    },
    Bb: {
      notes: [
        ['1-3-pull'],
        ['2-3-pull'],
        ['3-2-pull'],
        ['2-4-pull'],
        ['3-3-pull'],
        ['1-6-pull'],
        ['2-6-pull'],
        ['1-7-pull'],
      ],
      thirds: [
        ['1-3-pull', '1-4-pull'],
        ['2-3-pull', '2-4-pull'],
        ['3-2-pull', '3-3-pull'],
        ['2-4-pull', '2-5-pull'],
        ['3-3-pull', '2-6-pull'],
        ['1-6-pull', '1-7-pull'],
        ['2-6-pull', '2-7-pull'],
        ['1-7-pull', '1-8-pull'],
      ],
    },
    Eb: {
      notes: [
        ['2-4-pull'],
        ['3-3-pull'],
        ['2-5-pull'],
        ['3-4-pull'],
        ['1-7-pull'],
        ['2-7-pull'],
        ['3-6-pull'],
        ['2-8-pull'],
      ],
      thirds: [
        ['2-5-pull', '2-4-pull'],
        ['3-3-pull', '3-4-pull'],
        ['2-5-pull', '1-7-pull'],
        ['3-4-pull', '3-5-pull'],
        ['1-7-pull', '1-8-pull'],
        ['2-7-pull', '2-8-pull'],
        ['3-6-pull', '3-7-pull'],
        ['2-8-pull', '2-9-pull'],
      ],
    },
  }
   export  const one= [
        // Pull
        { id: '1-1-pull', name: 'D♭', frequency: tone.Db[4] },
        { id: '1-2-pull', name: 'G', frequency: tone.G[3] },
        { id: '1-3-pull', name: 'B♭', frequency: tone.Bb[3] },
        { id: '1-4-pull', name: 'D', frequency: tone.D[4] },
        { id: '1-5-pull', name: 'E', frequency: tone.E[4] },
        { id: '1-6-pull', name: 'G', frequency: tone.G[4] },
        { id: '1-7-pull', name: 'B♭', frequency: tone.Bb[4] },
        { id: '1-8-pull', name: 'D', frequency: tone.D[5] },
        { id: '1-9-pull', name: 'E', frequency: tone.E[5] },
        { id: '1-10-pull', name: 'G', frequency: tone.G[5] },
        // Push
        { id: '1-1-push', name: 'B', frequency: tone.B[3] },
        { id: '1-2-push', name: 'F', frequency: tone.F[3] },
        { id: '1-3-push', name: 'A', frequency: tone.A[3] },
        { id: '1-4-push', name: 'C', frequency: tone.C[4] },
        { id: '1-5-push', name: 'F', frequency: tone.F[4] },
        { id: '1-6-push', name: 'A', frequency: tone.A[4] },
        { id: '1-7-push', name: 'C', frequency: tone.C[5] },
        { id: '1-8-push', name: 'F', frequency: tone.F[5] },
        { id: '1-9-push', name: 'A', frequency: tone.A[5] },
        { id: '1-10-push', name: 'C', frequency: tone.C[6] },
    ]
  export const  two= [
        { id: '2-1-pull', name: 'F♯', frequency: tone.Gb[4] },
        { id: '2-2-pull', name: 'A', frequency: tone.A[3] },
        { id: '2-3-pull', name: 'C', frequency: tone.C[4] },
        { id: '2-4-pull', name: 'E♭', frequency: tone.Eb[4] },
        { id: '2-5-pull', name: 'G', frequency: tone.G[4] },
        { id: '2-6-pull', name: 'A', frequency: tone.A[4] },
        { id: '2-7-pull', name: 'C', frequency: tone.C[5] },
        { id: '2-8-pull', name: 'E♭', frequency: tone.Eb[5] },
        { id: '2-9-pull', name: 'G', frequency: tone.G[5] },
        { id: '2-10-pull', name: 'A', frequency: tone.A[5] },
        { id: '2-11-pull', name: 'C', frequency: tone.C[6] },
        // Push
        { id: '2-1-push', name: 'E', frequency: tone.E[4] },
        { id: '2-2-push', name: 'F', frequency: tone.F[3] },
        { id: '2-3-push', name: 'B♭', frequency: tone.Bb[3] },
        { id: '2-4-push', name: 'D', frequency: tone.D[4] },
        { id: '2-5-push', name: 'F', frequency: tone.F[4] },
        { id: '2-6-push', name: 'B♭', frequency: tone.Bb[4] },
        { id: '2-7-push', name: 'D', frequency: tone.D[5] },
        { id: '2-8-push', name: 'F', frequency: tone.F[5] },
        { id: '2-9-push', name: 'B♭', frequency: tone.Bb[5] },
        { id: '2-10-push', name: 'D', frequency: tone.D[6] },
        { id: '2-11-push', name: 'F', frequency: tone.F[6] },

    ]
    export const three= [
        { id: '3-1-pull', name: 'B', frequency: tone.B[4] },
        { id: '3-2-pull', name: 'D', frequency: tone.D[4] },
        { id: '3-3-pull', name: 'F', frequency: tone.F[4] },
        { id: '3-4-pull', name: 'A♭', frequency: tone.Ab[4] },
        { id: '3-5-pull', name: 'C', frequency: tone.C[5] },
        { id: '3-6-pull', name: 'D', frequency: tone.D[5] },
        { id: '3-7-pull', name: 'F', frequency: tone.F[5] },
        { id: '3-8-pull', name: 'A♭', frequency: tone.Ab[5] },
        { id: '3-9-pull', name: 'C', frequency: tone.C[6] },
        { id: '3-10-pull', name: 'D', frequency: tone.D[6] },
        // Push
        { id: '3-1-push', name: 'D♭', frequency: tone.Db[4] },
        { id: '3-2-push', name: 'B♭', frequency: tone.Bb[3] },
        { id: '3-3-push', name: 'E♭', frequency: tone.Eb[4] },
        { id: '3-4-push', name: 'G', frequency: tone.G[4] },
        { id: '3-5-push', name: 'B♭', frequency: tone.Bb[4] },
        { id: '3-6-push', name: 'E♭', frequency: tone.Eb[5] },
        { id: '3-7-push', name: 'G', frequency: tone.G[5] },
        { id: '3-8-push', name: 'B♭', frequency: tone.Bb[5] },
        { id: '3-9-push', name: 'E♭', frequency: tone.Eb[6] },
        { id: '3-10-push', name: 'G', frequency: tone.G[6] },
    ]




export const bassLayout = {
    one: [
        { id: '1-1-pull-bass', name: 'gm', frequency: [tone.G[3], tone.Bb[4], tone.D[4]] },
        { id: '1-2-pull-bass', name: 'G', frequency: tone.G[2] },
        { id: '1-1-push-bass', name: 'd', frequency: [tone.D[3], tone.Gb[4], tone.A[4]] },
        { id: '1-2-push-bass', name: 'D', frequency: tone.D[3] },

        { id: '1-3-pull-bass', name: 'cm', frequency: [tone.C[3], tone.Eb[4], tone.G[4]] },
        { id: '1-4-pull-bass', name: 'C', frequency: tone.C[3] },
        { id: '1-3-push-bass', name: 'g', frequency: [tone.C[3], tone.E[4], tone.G[4]] },
        { id: '1-4-push-bass', name: 'G', frequency: tone.G[2] },

        { id: '1-5-pull-bass', name: 'ab', frequency: [tone.Ab[3], tone.C[4], tone.Eb[4]] },
        { id: '1-6-pull-bass', name: 'A♭', frequency: tone.Ab[3] },
        { id: '1-5-push-bass', name: 'ab', frequency: [tone.Ab[3], tone.C[4], tone.Eb[4]] },
        { id: '1-6-push-bass', name: 'A♭', frequency: tone.Ab[3] },

    ],

    two: [
        { id: '2-1-pull-bass', name: 'c', frequency: [tone.C[3], tone.E[4], tone.G[4]] },
        { id: '2-2-pull-bass', name: 'C', frequency: tone.C[3] },
        { id: '2-1-push-bass', name: 'f', frequency: [tone.F[3], tone.A[4], tone.C[4]] },
        { id: '2-2-push-bass', name: 'F', frequency: tone.F[3] },

        { id: '2-3-pull-bass', name: 'f', frequency: [tone.F[3], tone.A[4], tone.C[4]] },
        { id: '2-4-pull-bass', name: 'F', frequency: tone.F[3] },
        { id: '2-3-push-bass', name: 'b♭', frequency: [tone.Bb[3], tone.D[4], tone.F[4]] },
        { id: '2-4-push-bass', name: 'B♭', frequency: tone.Bb[3] },

        { id: '2-5-pull-bass', name: 'b♭', frequency: [tone.Bb[3], tone.D[4], tone.F[4]] },
        { id: '2-6-pull-bass', name: 'B♭', frequency: tone.Bb[3] },
        { id: '2-5-push-bass', name: 'e♭', frequency: [tone.Eb[3], tone.G[4], tone.Bb[4]] },
        { id: '2-6-push-bass', name: 'E♭', frequency: tone.Eb[3] },
    ],
}

export const keyMap={
    z: { row: 1, column: 1 },
    x: { row: 1, column: 2 },
    c: { row: 1, column: 3 },
    v: { row: 1, column: 4 },
    b: { row: 1, column: 5 },
    n: { row: 1, column: 6 },
    m: { row: 1, column: 7 },
    ',': { row: 1, column: 8 },
    '.': { row: 1, column: 9 },
    '/': { row: 1, column: 10 },
    a: { row: 2, column: 1 },
    s: { row: 2, column: 2 },
    d: { row: 2, column: 3 },
    f: { row: 2, column: 4 },
    g: { row: 2, column: 5 },
    h: { row: 2, column: 6 },
    j: { row: 2, column: 7 },
    k: { row: 2, column: 8 },
    l: { row: 2, column: 9 },
    ';': { row: 2, column: 10 },
    "'": { row: 2, column: 11 },
    w: { row: 3, column: 1 },
    e: { row: 3, column: 2 },
    r: { row: 3, column: 3 },
    t: { row: 3, column: 4 },
    y: { row: 3, column: 5 },
    u: { row: 3, column: 6 },
    i: { row: 3, column: 7 },
    o: { row: 3, column: 8 },
    p: { row: 3, column: 9 },
    '[': { row: 3, column: 10 },
  }

  export const bassKeyMap = {
    1: { row: 1, column: 1 },
    2: { row: 1, column: 2 },
    3: { row: 2, column: 1 },
    4: { row: 2, column: 2 },
    5: { row: 1, column: 3 },
    6: { row: 1, column: 4 },
    7: { row: 2, column: 3 },
    8: { row: 2, column: 4 },
    9: { row: 1, column: 5 },
    0: { row: 1, column: 6 },
    '-': { row: 2, column: 5 },
    '=': { row: 2, column: 6 },
  }

export const layout={one,two,three}
export const buttonIdMap = [...one, ...two, ...three, ...bassLayout.one, ...bassLayout.two].reduce(
    (acc, value) => {
      return { ...acc, [value.id]: value }
    },
    {}
  )
  export const toggleBellows = 'q'

  export const rowMap = { 1: 'one', 2: 'two', 3: 'three' }
  export const rows = Object.values(rowMap)
  export const rowTones = { FBE: { one: 'F', two: 'B♭', three: 'E♭' } }
  export const bassRowMap = { 1: "one", 2: 'two' }
  export const bassRows = Object.values(bassRowMap)