interface MenuType {
    menuId: number,
    menuName: string,
    menuImage: string,
    menuDescription: string
}

interface CategoryType {
    categoryId: number,
    categroyName: string,
    categoryImage: string,
    categoryDescription: string
}

interface DishType {
    dishId: number,
    dishName: string,
    dishImage: string,
    dishDescription: string,
    dishPrice: number,
    dishNature: string
}

export type {MenuType, CategoryType, DishType}