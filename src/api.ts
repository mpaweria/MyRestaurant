export const Menu = {
    getAll: async () => {
        const response = await fetch("https://localhost:7176/api/Menus");
        return response.json();
    },
    getById: async (id: number) => {
        const response = await fetch(`https://localhost:7176/api/Menus/${id}`);
        return response.json();
    },
    create: async (data: any) => {
        const response = await fetch("https://localhost:7176/api/Menus", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    }
}

export const Category = {
    getAll: async () => {
        const response = await fetch("https://localhost:7176/api/Categories");
        return response.json();
    },
    getById: async (id: number) => {
        const response = await fetch(`https://localhost:7176/api/Categories/${id}`);
        return response.json();
    },
    getByMenuId: async (id: number) => {
        const response = await fetch(`https://localhost:7176/api/Categories/menuId = ${id}`);
        return response.json();
    },
    create: async (data: any, id: number) => {
        const response = await fetch(`https://localhost:7176/api/Categories?menuId=${id}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    },
    delete: async (id: number) => {
        const response = await fetch(`https://localhost:7176/api/Categories/${id}`, {
            method: "DELETE"
        });
        return response.json();
    },
    update: async (data: any, id: number) => {
        const response = await fetch(`https://localhost:7176/api/Categories/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    }
}

export const Dish = {
    getAll: async () => {
        const response = await fetch("https://localhost:7176/api/Dishes");
        return response.json();
    },
    getById: async (id: number) => {
        const response = await fetch(`https://localhost:7176/api/Dishes/${id}`);
        return response.json();
    },
    getByCategoryId: async (id: number) => {
        const response = await fetch(`https://localhost:7176/api/Dishes/CategoryId = ${id}`);
        return response.json();
    },
    create: async (data: any, id: number) => {
        const response = await fetch(`https://localhost:7176/api/Dishes?categoryId=${id}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    },
    delete: async (id: number) => {
        const response = await fetch(`https://localhost:7176/api/Dishes/${id}`, {
            method: "DELETE"
        });
    },
    update: async (data: any, id: number) => {
        const response = await fetch(`https://localhost:7176/api/Dishes/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    }
}