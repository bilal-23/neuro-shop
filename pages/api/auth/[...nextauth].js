import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { connectToDatabase } from '../../../util/database';
import { verifyPassword } from '../../../util/auth';

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const client = await connectToDatabase();
                if (!client) throw new Error('Connection to database failed');

                const db = client.db();

                const user = await db.collection('users').findOne({ email: credentials.email })
                if (!user) {
                    client.close();
                    throw new Error('No User Found');
                }

                const isValid = await verifyPassword(credentials.password, user.password);
                if (!isValid) {
                    client.close();
                    throw new Error('Incorrect password');
                }

                client.close();

                return {
                    email: user.email
                }
            }
        })
    ]
});