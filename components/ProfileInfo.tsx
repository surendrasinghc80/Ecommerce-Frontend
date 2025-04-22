import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "lucide-react";

export function ProfileInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="relative">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                variant="outline"
                className="absolute bottom-0 right-0 h-6 w-6 rounded-full border-2 border-white cursor-pointer transition duration-400"
              >
                <Camera className="h-3 w-3" />
                <span className="sr-only">Upload new picture</span>
              </Button>
            </div>
            <div>
              <h3 className="font-medium">Profile Picture</h3>
              <p className="text-sm text-gray-500">
                JPG, GIF or PNG. 1MB max size.
              </p>
            </div>
          </div>

          <Separator />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="John" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Doe" />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              defaultValue="john.doe@example.com"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
          </div>
        </CardContent>
        <CardFooter className="border-t p-6 flex justify-end">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Update your password here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" />
          </div>
        </CardContent>
        <CardFooter className="border-t p-6 flex justify-end">
          <Button>Update Password</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
