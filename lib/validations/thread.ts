// Zod digunakan untuk validasi data
import * as z from 'zod';

// Middleware for validating user data
export const ThreadValidation = z.object({
    thread: z.string().min(3, {message: 'Minimum 3 characters'} ).nonempty(),
    accountId: z.string()
});

export const CommentValidation = z.object({
    thread: z.string().min(3, {message: 'Minimum 3 characters'} ).nonempty(),
});