interface MenuType {
    menuName: string,
    menuImage: string,
    menuDescription: string
}

interface CategoryType {
    categroyName: string,
    categoryImage: string,
    categoryDescription: string
}

interface DishType {
    dishName: string,
    dishImage: string,
    dishDescription: string,
    dishPrice: number,
    dishNature: string
}

export type {MenuType, CategoryType, DishType}