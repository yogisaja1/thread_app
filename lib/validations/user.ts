// Zod digunakan untuk validasi data
import * as z from 'zod';

// Middleware for validating user data
export const userValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3).max(30),
    username: z.string().min(3).max(1000),
    bio: z.string().min(3).max(1000),
});