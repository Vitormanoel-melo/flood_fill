/*
    An image is represented by and m x n interger grid image where
    image[i][j] represents the pixel value of the image

    You are also given three integers x, y, and color, You should
    perform a flood fill on the image starting from the pixel 
    image[x][y]

    To perform a flood fill, considerthe  starting pixel, plus any pixels 
    connected 4-directionally to the starting pixel of the same color as the 
    starting pixel, plus any pixels connected 4-directionally to those pixels
    (also with the same color), and so on. Replace the color of all of the
    aforementioned pixels with color.

    Return the modified image after performing the flood fill
*/

function main (grid, x, y, color) {
    const originalColor = grid[x][y]
    const newGrid = resolve(grid, x, y, originalColor, color)
    console.log(newGrid)
}

function resolve(grid, x, y, originalColor, color) {
    if(grid[x][y] != originalColor) return;
    grid[x][y] = color;

    if(x > 0) {
        resolve(grid, x - 1, y, originalColor, color)
    }
    if(x + 1 < grid.length) {
        resolve(grid, x + 1, y, originalColor, color)
    }

    if(y > 0) {
        resolve(grid, x, y - 1, originalColor, color)
    }
    if(y + 1 < grid[x].length) {
        resolve(grid, x, y + 1, originalColor, color)
    }

    return grid
}

const grid = [
    [1, 1, 2],
    [0, 1, 2],
    [1, 2, 2],
    [1, 1, 0]
]

main(grid, 1, 1, 3)