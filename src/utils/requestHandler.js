export const safeRequest = async (callback) => {
    try {
        const result = await callback()
        return result;
    } catch (e) {
        return { error : e };
    }
};