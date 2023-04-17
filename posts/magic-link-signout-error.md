---
title: 'Supabase signout error (Magic Link)'
date: '2023-04-17'
---

# Subabase sign out error (with Magic Link Authentication) 

(*For future me when I inevitably hit the same issue - and hopefully someone else who stumbles on this*) 

I've been working on implementing some basic auth for a new project, and I decided to implement Magic Email authentication through Supabase. For whatever reason using the Supabase-js client wouldn't delete the cookies when calling `supabase.auth.signOut` helper functions. 

Could be a combination of a few things (including that the site is SSR with NextJS) - but what fixed it for me was using the `useSupabaseClient` from the auth-helpers-react package. Hope this helps someone else down the line - below is a quick implementation: 

## Solution (what worked for me) 

```
//Example component using the auth-helper-react
import { useSupabaseClient } from  '@supabase/auth-helpers-react'

export default function EditProile() {
	const  supabaseClient = useSupabaseClient() //init client from auth-helpers-react
	
	//example sign in function - still uses supabase-js client? Probably need to refactor :) 
	async function signInWithEmail() { 
		const { data, error } = await supabase.auth.signInWithOTP({
		email: example@gmail.com,
		options: {
			emailRedirectTo: '/pageToRedirectTo',
		},
	  })
	}
			
	
	return (
		{!user ? //conditionally render based on user info (just an example) 
			<button onClick={() => signInWithEmail()} Sign in </button>
            // function that calls Magic Link
		  : <button onClick{async () => await supabaseClient.auth.signOut(); }} Log Out </button> // inline for simplicity - update as needed
		}
	)
```

### Links
[Github issue / solution](https://github.com/supabase/gotrue-js/issues/46#issuecomment-1313750844) 

[Supabase sign out docs (with OTP (magic links) )](https://supabase.com/docs/reference/javascript/auth-verifyotp)