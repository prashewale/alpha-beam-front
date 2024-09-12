import { useNavigate } from 'react-router-dom';
import Header from '@/components/common/header';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { LoginRequest, Status } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { useSignInAccount } from '@/lib/react-query/queries';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SigninValidation } from '@/lib/validation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

import Loader from '@/components/common/Loader';
import { Button } from '../ui/button';

type LoginProps = {
  redirectPath?: string;
};

export default function Login({ redirectPath }: LoginProps) {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const signIn = useSignIn();

  const { mutateAsync: signInAccount, isPending: isSignInPending } =
    useSignInAccount();

  const handleSignIn = async (loginUser: z.infer<typeof SigninValidation>) => {
    const request: LoginRequest = { ...loginUser, rememberMe: false };
    const res = await signInAccount(request);
    if (!res || !res.data || res.status !== Status.SUCCESS) {
      toast({ title: 'Login failed. Please try again.' });
      return;
    }

    const { accessToken, refreshToken, user } = res.data;

    const isSignedIn = signIn({
      auth: {
        token: accessToken,
      },
      userState: user,
      refresh: refreshToken,
    });

    if (isSignedIn) {
      form.reset();
      const path = redirectPath || '/';
      navigate(path);
      return;
    }
  };

  return (
    <>
      <Header />

      <div className="container">
        <br />
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <header className="card-header">
                <a
                  href="/register"
                  className="btn btn-outline-primary float-right mt-1"
                >
                  Sign up
                </a>
                <h4 className="card-title mt-2">Log in</h4>
              </header>

              <Form {...form}>
                <article className="card-body">
                  <form onSubmit={form.handleSubmit(handleSignIn)}>
                    <div className="form-group">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="shad-form_label">
                              Username
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                className="shad-input form-control"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="form-group">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="shad-form_label">
                              Password
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                className="shad-input form-control"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="form-group">
                      <Button
                        type="submit"
                        className="shad-button_primary w-full"
                      >
                        {isSignInPending ? (
                          <div className="flex items-center justify-center gap-2">
                            <Loader /> Loading...
                          </div>
                        ) : (
                          'Log in'
                        )}
                      </Button>
                    </div>
                  </form>
                </article>
              </Form>
              <div className="border-top card-body text-center">
                Don't have a account? <a href="/register">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
