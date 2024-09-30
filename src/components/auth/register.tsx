import { useNavigate } from 'react-router-dom';
import Header from '@/components/common/header';
import { LoginRequest, RegisterRequest, Status } from '@/types';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SignupValidation } from '@/lib/validation';
import {
  useCreateUserAccount,
  useSignInAccount,
} from '@/lib/react-query/queries';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';
import Loader from '../common/Loader';

type RegisterProps = {
  redirectPath?: string;
};

export default function Register({ redirectPath }: RegisterProps) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const authUser = useAuthUser();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      firstName: '',
      lastName: '',
      city: '',
      country: '',
      gender: '',
      mobile: '',
    },
  });

  // Queries
  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } =
    useCreateUserAccount();

  const { mutateAsync: signInAccount, isPending: isSigningInUser } =
    useSignInAccount();

  const signIn = useSignIn();

  const handleSignup = async (newUser: z.infer<typeof SignupValidation>) => {
    try {
      const request: RegisterRequest = {
        ...newUser,
      };
      const res = await createUserAccount(request);

      if (!res) {
        toast({ title: 'Sign up failed. Please try again.' });
        return;
      }

      if (res.status !== Status.SUCCESS) {
        toast({ title: res.errors.join(', ') });
        return;
      }

      const loginRequest: LoginRequest = {
        username: newUser.username,
        password: newUser.password,
        rememberMe: true,
      };
      const signInResponse = await signInAccount(loginRequest);

      if (
        !signInResponse ||
        signInResponse.status !== Status.SUCCESS ||
        !signInResponse.data
      ) {
        toast({
          title: 'Something went wrong. Please login your new account',
        });

        navigate('/login');

        return;
      }

      const { accessToken, refreshToken, user } = signInResponse.data;

      const isSignedIn = signIn({
        auth: {
          token: accessToken,
        },
        userState: user,
        refresh: refreshToken,
      });

      if (!isSignedIn) {
        toast({ title: 'Login failed. Please try again.' });
        return;
      }

      form.reset();
      const path = redirectPath || '/';
      navigate(path);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        {/* 
        <div
          className={
            'alert alert-danger alert-dismissible fade' +
            (errorMessage ? ' show' : '')
          }
          role="alert"
        >
          {errorMessage}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div> */}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <header className="card-header">
                <a
                  href="/login"
                  className="float-right mt-1 rounded-md border-2 border-[#053349] p-2 text-[#053349] hover:bg-[#053349] hover:text-white"
                >
                  Log in
                </a>
                <h4 className="card-title mt-2">Sign up</h4>
              </header>
              <Form {...form}>
                <article className="card-body">
                  <form
                    data-bitwarden-watching="1"
                    onSubmit={form.handleSubmit(handleSignup)}
                  >
                    <div className="form-row">
                      <div className="col form-group">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                First Name
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
                      <div className="col form-group">
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Last Name
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
                    </div>
                    <div className="form-group">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="shad-form_label">
                              Email
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
                      <small className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>

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
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="shad-form_label">
                              Mobile
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
                        name="gender"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex space-x-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="M" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Male
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="F" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Female
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="O" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Other
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                City
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Country
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a country" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="in">India</SelectItem>
                                  <SelectItem value="us">
                                    United States
                                  </SelectItem>
                                  <SelectItem value="uk">
                                    United Kingdom
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
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
                                className="shad-input"
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
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="shad-form_label">
                              Confirm Password
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                className="shad-input"
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
                        className="w-full rounded-md border-2 border-[#053349] bg-[#053349] p-2 text-white"
                      >
                        {isCreatingAccount || isSigningInUser ? (
                          <div className="flex-center gap-2">
                            <Loader /> Loading...
                          </div>
                        ) : (
                          'Sign Up'
                        )}
                      </Button>
                    </div>
                    <small className="text-muted">
                      By clicking the 'Sign Up' button, you confirm that you
                      accept our <br /> Terms of use and Privacy Policy.
                    </small>
                  </form>
                </article>
              </Form>
              <div className="border-top card-body text-center">
                Have an account?{' '}
                <a href="/login">
                  <span className="!text-[#053349]">Log In</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
